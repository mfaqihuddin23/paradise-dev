
// CodeMirror(document.querySelector('#my-div'), {
//     lineNumbers: true,
//     tabSize: 2,
//     value: '[{"id":1,"name":"David","age":20},{"id":2,"name":"Bobby","age":34},{"id":3,"name":"Warren","age":28}]',
//     mode: { name: "javascript", json: true },
//     theme: 'monokai',
//     // scrollbarStyle: "simple",
//     readOnly: true
//   });
var editor = CodeMirror.fromTextArea(document.getElementById("mytextarea"), {
  lineNumbers: false,
  matchBrackets: false,
  mode: { name: "javascript", json: true },
  // value: '[{"id":1,"name":"David","age":20},{"id":2,"name":"Bobby","age":34},{"id":3,"name":"Warren","age":28}]',
  theme: 'monokai',
  readOnly: true
});

var editor = CodeMirror.fromTextArea(document.getElementById("mytextarea2"), {
  lineNumbers: false,
  matchBrackets: false,
  mode: { name: "javascript", json: true },
  // value: TextArea.value,
  theme: 'monokai',
  readOnly: true
});