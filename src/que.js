class Que extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const id = this.props.id;
    return <h2>{this.props.question}</h2>;
  }
}

const questions = [
  "What is Netflix ?",
  "How much does Netflix cost ?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix ?",
  "Is Netflix good for kids ?"
];

const ids = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 6; i++) {
  ReactDOM.render(
    <Que question={questions[i]} />,
    document.getElementById(`que${ids[i]}`)
  );
}