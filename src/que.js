import React from "react";
import ReactDOM from "react-dom";
class Que extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = { ans: false };
  }
  render() {
    return <button>{this.props.question}</button>;
  }
}
const ids = [1, 2, 3, 4, 5, 6];

const questions = [
  "What is Netflix ?",
  "How much does Netflix cost ?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix ?",
  "Is Netflix good for kids ?",
];

const answers = [
  "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!",
  "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
];

for (let i = 0; i < 6; i++) {
  ReactDOM.render(
    <Que question={questions[i]} />,
    document.getElementById(`que${ids[i]}`)
  );
}
