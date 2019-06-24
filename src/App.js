import React, {Component} from 'react';

class App extends Component {

    handleImage=  (e) => {
        // (1)FileReader
        // const reader = new FileReader();
        // reader.onload = (event) => {
        //     this.img = new Image();
        //     this.img.onload = () => {
        //         this.canvas.width = this.img.width;
        //         this.canvas.height = this.img.height;
        //         this.canvas.getContext('2d').drawImage(this.img, 0, 0);
        //     };
        //     this.img.src = event.target.result;
        // };
        // reader.readAsDataURL(e.target.files[0]);


        // (2)FileList
        const canvasImage  = this.canvas;
        const img = new Image();
        const file = e.target.files[0];
        img.onload = function () {
            //setting canvas width and height mapping upload image
            canvasImage.width = this.width;
            canvasImage.height = this.height;
            const imgCanvas = canvasImage.getContext('2d');
            imgCanvas.drawImage(img, 0, 0);
        };
        img.src = URL.createObjectURL(file);
    }
    inputUploadClick=()=>{
        this.upload.click();
    }
  render() {
    const btn_Style={
          width: '100px'
      }
    const center ={
      textAlign:'center'
    }
    return (
        <div style={center}>
            <canvas  style={{  border: '1px solid black'}}ref={(input) => { this.canvas = input }}></canvas>
            <div>
            <input type="file" accept="image/*" value='' ref={(input) => { this.upload = input }} onChange={event => this.handleImage(event)} hidden/>
          <button  style={btn_Style} type='button' onClick={this.inputUploadClick}>upload</button>
            </div>
        </div>
    );
  }
}
export default App;

