import $ from 'jquery';
import codemirror from 'codemirror';
import 'codemirror/mode/clike/clike';
import run from './src/run_code';
import example from './src/example/helloweb.cpp';

let codeCm = codemirror.fromTextArea($('[name=script]')[0], {
  lineNumbers: true,
  mode: 'c++11'
});
codeCm.setValue(example);
let outCm = codemirror.fromTextArea($('[name=out]')[0], {});


$('form').on('submit', function(e) {
  e.preventDefault();
  run($(this).serialize())
    .done(function(out) {
      outCm.setValue(out);
    })
    .fail(function(data) {
      window.__err = data.responseJSON.message;
      outCm.setValue(data.responseJSON.message
          .replace('Command failed: /bin/sh -c ', '')
          .replace(/\/tmp\/(.+\.cpp)/g, 'source.cpp')
          .replace(/\/tmp\/(.+\.out)/g, 'a.out')
      );
    });
});
