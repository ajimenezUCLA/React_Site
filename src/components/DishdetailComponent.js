import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
        Breadcrumb, BreadcrumbItem,
        Button, Row, Col, Label,
        Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" className="ml-3">Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                     model=".rating"
                                     name="rating"
                                     className="form-control"
                                     defaultValue="5"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" className="ml-3">Your Name</Label>
                                <Col md={12}>
                                    <Control.text 
                                     model=".yourname"
                                     id="yourname"
                                     name="yourname"
                                     placeholder="Your Name"
                                     className="form-control"
                                     validators={{
                                         required,
                                         minLength: minLength(3),
                                         maxLength: maxLength(15)
                                     }}
                                    />
                                    <Errors 
                                     className="text-danger"
                                     model=".yourname"
                                     show="touched"
                                     messages={{
                                         required: 'Required',
                                         minLength: 'Must be greater than 2 characters',
                                         maxLength: 'Must be 15 characters or less'
                                     }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="textarea" className="ml-3">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea 
                                     model=".comment"
                                     id="comment"
                                     name="comment"
                                     rows="6"
                                     className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

function RenderDish({dish}) { // props only receives one props object
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm />
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

}

export default DishDetail;


/*
// DishDetail is implemented as a functional (stateless) component
class DishDetail extends Component {


renderComments(comments) {
    if ( comments != null ) {
        return(
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} >
                            <div>{comment.comment}</div>
                            <p>
                            &nbsp;&nbsp; --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                            <br />
                        </li>
                    );
                })}
            </ul>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row" >
                    <div className=" col-12 col-md-5 m-1" >
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h3>Comments</h3>
                        <ul className="list-unstyled">
                            {this.renderComments(dish.comments)}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        if (this.props.dish != null) {
            let {dish} = this.props;

            return (
                this.renderDish(dish)
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}



export default DishDetail;
*/





    /*
    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        else {
            return comments.map((c) => {
                return (
                    <div className="container" >
                        <li id={c.id}>
                            <div className="row">
                                {c.comment}
                            </div>
                            <div className="row">
                                <div>
                                    {c.comment}
                                </div>
                                <div>
                                    -- {c.author}, {c.date}
                                </div>
                            </div>
                        </li>
                    </div>
                );
            });
        }
    }
*/