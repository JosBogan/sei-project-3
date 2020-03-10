import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import ProjectCard from '../projects/ProjectCard'

class MyPortfolio extends React.Component {
  state = {
    user: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/myportfolio', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { id, board_owned, boards_assigned, username, first_name, last_name, email, name, profile_image, bio, company, title  } = this.state.user
    if (!this.state.user) return null
    return (
      <section className="section">
        <h1>Welcome {first_name} </h1>
        <h2>{name}</h2>

      </section>
    )
  }
}

export default MyPortfolio