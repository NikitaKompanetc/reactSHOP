import React, { Component } from "react";
import { Collapse } from "reactstrap";
import { Table } from "reactstrap";
import axiosConfig from '../../../axiosConfig';
export default class RecentOrdersCollapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageValue: '',
    }
  }
  componentDidMount() {
    this.getMessages(this.props.id);
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState.messages !== this.state.messages) {

    }
  }
  componentWillUnmount() {

  }

  getDate = (date) => {
    const d = new Date(date);
    const actualDate =
      d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return actualDate;
  };
  changeMessage = (event) => {
    this.setState({ messageValue: event.target.value });
  }
  getMessages = (id) => {
    axiosConfig.get(`/api/printsterOrders/${id}?select=messages`)
      .then((data) => {
        this.setState({ messages: data.data[0].messages })
      });
  }

  sendMessage = () => {
    axiosConfig.put(`/api/printsterOrders/addMessage/${this.props.id}`,
      { "writing": this.state.messageValue },
    )
    this.setState({ messageValue: '' })
  }
  render() {
    const { messages, data, id, openDetails, currentDetails } = this.props;
    return (
      <td colSpan="12">
        <Collapse style={{
          padding: "10px",
          border: "2px solid #dee2e6",
        }
        } isOpen={currentDetails === data._id && openDetails === false}>
          <div className="billing-stats">
            <div>
              <div className="stats__head">Shipping address:</div>
              <div>
                <div>Maria Robertson</div>
                <div>99 Shriley Ave.</div>
                <div>London</div>
                <div>EJHM99</div>
                <div>+44 899388829</div>
                <div>E-mail: Mroberts@pt.com</div>
              </div>
            </div>
            <div>
              <div className="stats__head">Shopify Order No.</div>
              <div>99283</div>
            </div>
            <div className="stats__buttons">
              <div>
                <button className="stats__btn_status">Status</button>
              </div>
              <div>
                <button className="stats__btn_replace">Request replacement</button>
              </div>
            </div>
          </div>
          <Table style={{
            padding: "10px",
            borderBottom: "2px solid #000"
          }}>
            <thead style={{
              padding: "10px",
              borderBottom: "2px solid #dee2e6"
            }}>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Item Internal</th>
                <th>Quantity</th>
                <th>Unit Cost</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{
                padding: "10px",
                borderBottom: "1px solid #dee2e6"
              }}>
                <th>1</th>
                <th>Dog design mug</th>
                <th>white mug - white</th>
                <th>1</th>
                <th>€9</th>
                <th>€9</th>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-between">
            <div className="chat-container">
              <div className="d-flex">
                <div className="chat__title h6">Contact</div>
                <div className="ml-1 font-weight-bold">Trade portal</div>
              </div>
              <div className="chat__area p-2">
                <div className="chat__chat border-dark">
                  {this.state.messages && this.state.messages.map(item => {
                    return <div>{this.getDate(item.time)}: {item.author} - {item.writing}</div>
                  })}
                </div>
                <div className="chat__send-message d-flex justify-content-between">
                  <input type='text' className="w-100 border-0" placeholder="Your message here..."
                    value={this.state.messageValue}
                    onChange={this.changeMessage}
                  />
                  <button className="send-btn" onClick={() => this.sendMessage()}>Send</button>
                </div>
              </div>
            </div>
            <div className="grand-total d-flex">
              <div>
                <div className='mr-4'>
                  <div>Shipping Method:</div>
                  <div>Sub-total:</div>
                  <div>shipping:</div>
                  <div>VAT</div>
                </div>
                <div className='mt-2 font-weight-bold'>Grand Total</div>
              </div>
              <div>
                <div>
                  <div>Royal Mail Regular</div>
                  <div>£27.00</div>
                  <div>£0.00</div>
                  <div>£3.00</div>
                </div>
                <div className='mt-2 font-weight-bold'>£30.00</div>
              </div>
            </div>

          </div>

        </Collapse>

      </td>
    );
  }
}
