import React from 'react';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../util/project_api_util';

class FullProjectForm extends React.Component {
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
    debugger
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

          <form className="full-project-form" onSubmit={this.handleSubmit}>
            <section className='form-sub-box'>
              <div>Project title</div>
              <div className='right-box'>
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="title..."
                  onChange={this.update('title')}
                />
                <div>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.
                  These words will help people find your project, so choose them wisely! Your name will be searchable too.</div>
              </div>
            </section>
            <section className='form-sub-box'>
              <div>Short blurb</div>
              <div className='right-box'>
                <input
                  type="textarea"
                  value={this.state.description}
                  onChange={this.update('description')}
                />
                <div>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</div>
              </div>
            </section>
            <section className='form-sub-box'>
              <div>Category</div>
              <select className='right-box'>
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
            </section>
              <section className='form-sub-box'>
                <div>Project end date</div>
                <div className='right-box'>
                  <input type="date" name="TEST" value={this.state.end_date} />
                  <div>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</div>
                </div>
              </section>
              <section className='form-sub-box'>
                <div>Funding goal</div>
                <div className='right-box'>
                  <input type="number" name="someid" />
                  <div>Funding on Rickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.
                    If your project is successfully funded, the following fees will be collected from your funding total: Rickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</div>
                </div>
              </section>
              <section className='bottom-bar'>
                <link>Discard changes</link>
                // TODO: get discard changes to work
                <button className='project-submit-button'>Save and continue</button>
              </section>
          </form>
        </section>
      );

  }
}

export default withRouter(FullProjectForm);
