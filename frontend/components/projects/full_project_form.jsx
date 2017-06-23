import React from 'react';
import { withRouter } from 'react-router-dom';

class FullProjectForm extends React.Component {
  constructor(props) {
    super(props);
    const importedCategory = this.props.incompleteForm.category;
    const importedTitle = this.props.incompleteForm.title;

    this.state = {
      category: importedCategory,
      title: importedTitle,
      description: '',
      end_date: null,
      funding_goal: null,
      details: 'The creator of this project has not added any details yet!',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    debugger

    const newProject = this.state;
    this.props.createProject(newProject)
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


  selectorRender() {
    const CATEGORIES = ['Art', 'Comic', 'Crafts', 'Dance', 'Design', 'Fashion',
    'Film & Video', 'Food', 'Games', 'Journalism', 'Music', 'Photography', 'Publishing', 'Technology', 'Theatre']

    const selectorOptions = CATEGORIES.map( (cat) => {
      if (cat === this.state.category) {
        return (
          <option name={this.state.category} selected='selected' value={cat}>{cat}</option>
          );
      } else {
        return (
          <option name={this.state.category} value={cat}>{cat}</option>
          );
      }
    });
    return (
      selectorOptions
    )
  }

  render() {
      return (
        <section className="full-project-create">
          <section className='content-container'>
            <div className='full-header'> Lets get started </div>
            <div className='sub-header'>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</div>
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
                    <option name={this.state.category} value=''>Select a category</option>
                    {this.selectorRender()}
                </select>
              </section>
              <section className='form-sub-box'>
                <div>Project end date</div>
                <div className='right-box'>
                  <input type="date" name="TEST" onChange={this.update('end_date')} value={this.state.end_date} />
                  <div>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</div>
                </div>
              </section>
                <section className='form-sub-box'>
                  <div>Funding goal</div>
                  <div className='right-box'>
                    <input type="number" onChange={this.update('funding_goal')} value={this.state.funding_goal} />
                  <div>Funding on Rickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.
                    If your project is successfully funded, the following fees will be collected from your funding total: Rickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</div>
                  </div>
                </section>
                <section className='bottom-bar'>
                  <div>Discard changes</div>
                  // TODO: get discard changes to work
                  <button className='project-submit-button'>Save and continue</button>
                </section>
            </form>
          </section>
        </section>
      );

  }
}

export default withRouter(FullProjectForm);
