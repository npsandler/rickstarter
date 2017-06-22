import React from 'react';
import { withRouter } from 'react-router-dom';

class PreliminaryProjectForm extends React.Component {
  constructor(props) {
    super(props)
    // TODO: find currentUser.id
    this.state = {
      category: '',
      title: ''
    };

    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    history.push('/fullform')
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
      return (
        <section className="project-create">
          <h1 className='blue'> Get Started </h1>
          <ul>
            {this.errors()}
          </ul>
          <form  className="prelim-project-form" onSubmit={this.handleSubmit}>
            <select name={this.state.category} onChange={this.update('category')}>
              <option value=''>Select a category</option>
              <option value='Art'>Art</option>
              <option value='Comics'>Comics</option>
              <option value='Crafts'>Crafts</option>
              <option value='Dance'>Dance</option>
              <option value='Design'>Design</option>
              <option value='Fashion'>Fashion</option>
              <option value='Film & Video'>Film & Video</option>
              <option value='Food'>Food</option>
              <option value='Games'>Games</option>
              <option value='Journalism'>Journalism</option>
              <option value='Music'>Music</option>
              <option value='Photography'>Photography</option>
              <option value='Publishing'>Publishing</option>
              <option value='Technology'>Technology</option>
              <option value='Theatre'>Theatre</option>
            </select>

              <input
                type="text"
                value={this.state.title}
                placeholder="title..."
                onChange={this.update('title')}
              />
            <button>Save and continue</button>
          </form>
        </section>
      );
    }
}

export default withRouter(PreliminaryProjectForm);
