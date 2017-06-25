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
      image: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(this.state).forEach( key => {
      if (key === "imageUrl" || (key === "image" && !this.state.image)) {
        return;
      }
      formData.append(`project[${key}]`, this.state[key]);
    });
    this.props.createProject(formData);
    // this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: file,
        imageUrl: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
          <section className='page-header'>
            <h1 className='full-header'> Lets get started </h1>
            <h2 className='sub-header'>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</h2>
            <ul>
              {this.errors()}
            </ul>
          </section>
          <section className='content-container'>
            <form className="full-project-form" onSubmit={this.handleSubmit}>
              <section className='form-sub-box'>
                <h3>Project Image</h3>
                <section className='right-box'>
                  <img src={this.state.imageUrl}/>
                  <input type="file" onChange={this.updateFile}/>
                  <text>This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free</text>
                </section>
              </section>
              <section className='form-sub-box'>
                <h3>Project title</h3>
                <div className='right-box'>
                  <input
                    type="text"
                    value={this.state.title}
                    placeholder="title..."
                    onChange={this.update('title')}
                  />
                <text>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.
                </text>
                  <text>
                    These words will help people find your project, so choose them wisely! Your name will be searchable too.</text>
                </div>
              </section>
              <section className='form-sub-box'>
                <h3>Short blurb</h3>
                <div className='right-box'>
                  <input
                    type="textarea"
                    value={this.state.description}
                    onChange={this.update('description')}
                  />
                <text>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</text>
                </div>
              </section>
              <section className='form-sub-box'>
                <h3>Category</h3>
                <select className='right-box'>
                    <option name={this.state.category} value=''>Select a category</option>
                    {this.selectorRender()}
                </select>
              </section>
              <section className='form-sub-box'>
                <h3>Project end date</h3>
                <div className='right-box'>
                  <input type="date" name="TEST" onChange={this.update('end_date')} value={this.state.end_date} />
                  <text>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</text>
                </div>
              </section>
                <section className='form-sub-box'>
                  <h3>Funding goal</h3>
                  <div className='right-box'>
                    <input type="number" onChange={this.update('funding_goal')} value={this.state.funding_goal} />
                  <text>Funding on Rickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.
                  </text>
                    <text>
                    If your project is successfully funded, the following fees will be collected from your funding total: Rickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</text>
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
