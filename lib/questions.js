"use strict";

var _que = require("./que");

var questions = ["What is Netflix ?", "How much does Netflix cost ?", "Where can I watch?", "How do I cancel?", "What can I watch on Netflix ?", "Is Netflix good for kids ?"];
var ids = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < 6; i++) {
  ReactDOM.render( /*#__PURE__*/React.createElement(_que.Que, {
    question: questions[i]
  }), document.getElementById("que".concat(ids[i])));
}