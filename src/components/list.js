import React, {Component} from 'react';
// import Modal from './modal.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class List extends Component {
  constructor(props){
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem : 0,
      brochure : [
        {title: "Gold",
        msg: "24k Bracelet"},
        {
          title: "Delve",
          msg: "Necklace"
        },
        {
          title: "Diamond",
          msg: "Ring"
        }
      ],
       title: '',
       msg: '',
      openModal: false
    }

    this.toggle = this.toggle.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
      openModal: true
    });
  }
  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({brochure: tempbrochure});
  }

  deleteItem (index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState ({brochure: tempBrochure});
  }

  toggle(){
   //let newState = {...this.state, ...{openModal: !this.state.openModal}};
    this.setState({
      openModal: false
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        title: nextProps.title,
        msg: nextProps.msg,
    });
  }

  titleHandler(e) {
    this.setState({ title: e.target.value });
  }

  msgHandler(e) {
    this.setState({ msg: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.saveModalDetails(item)
  }

  render(){
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key = {index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className = "btn btn-primary" data-toggle="modal" data-target ="#exampleModal"
            onClick = {() => this.replaceModalItem(index)}>Edit</button> {" "}
            <button className = "btn btn-danger" onClick = {() => this.deleteItem(index)}>Remove</button>
          </td>
        </tr>
      )
    });

    const requiredItem = this.state.requiredItem;
    let modalData= this.state.brochure[requiredItem];
    return(
      <div>
        <div style = {{textAlign: "center"}}>
          <h1>Editable Bootstrap Modal In React</h1>
          <h6>Bootstrap 4.0.0-beta.3</h6>
        </div>
        <table className = "table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        {/* <Modal
          title = {modalData.title}
          msg = {modalData.msg}
          saveModalDetails = {this.saveModalDetails}
        /> */}

      <Modal isOpen={this.state.openModal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>
          <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody>
          <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
          <p><span className="modal-lable">Msg:</span><input value={this.state.msg} onChange={(e) => this.msgHandler(e)} /></p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
        </ModalFooter>
      </Modal>

      </div>
    );
  }
}

export default List;
