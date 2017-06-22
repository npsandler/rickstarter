import React from 'react';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../util/project_api_util';

class ProjectForm extends React.Component {
  constructor(props) {
    debugger
    // TODO: check props
    super(props);
    if (this.props.match.path.includes('edit')) {
      this.editing = true;
    } else {
      this.editing = false;
    }
    this.state = {
      body: '',
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.state.projectId = this.props.match.params.projectId;
    // TODO: currentUser?
    this.props.createProject(this.state)
      .then( () => window.location.href = `/`);
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
          <h1> Lets get started </h1>
          <h2>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</h2>
          <ul>
            {this.errors()}
          </ul>
          <form className="project-form" onSubmit={this.handleSubmit}>
              <selectr>
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

export default withRouter(ProjectForm);
