import React from 'react'
import axios from 'axios'

class ImageUpload extends React.Component {
  state = {
    image: null,
    original: null
  }

  handleUpload = async ({ target: { files } }) => {
    console.log('yeet')
    const data = new FormData
    data.append('file', files[0])
    console.log(process.env.CLOUDINARY_USER_KEY)
    console.log(process.env.PORT)
    console.log(process.env.MONGODB_URI)
    data.append('upload_preset', 'hmrrfxib') // this is your user key from your cloudinary account
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_USER_KEY}/image/upload`, data)
    this.setState({ image: res.data.url, original: files[0].name }, () => {
      this.props.handleChangeImage({ target: { name: this.props.fieldName, value: res.data.url } }) 
    })
  }

  render() {
    return (
      <div className="file has-name is-fullwidth">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" onChange={this.handleUpload} />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              {this.props.labelText}
            </span>
          </span>
          <span className="file-name">
            {this.state.original || 'No image selected'} 
          </span>
        </label>
      </div>
      
    )
  }
}

export default ImageUpload