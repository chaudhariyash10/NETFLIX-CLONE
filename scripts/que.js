import style from '../css/faq.module.css';

class Que extends React.Component{
  constructor({props}) {
    super(props);
  }
  render() {
    const id = this.props.id; 
    return (
      <div className={style.queTemplate}>
        <h2>{this.props.content}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Que content="What is Netflix?"/>, document.getElementById('que1'));