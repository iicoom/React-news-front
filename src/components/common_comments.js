/**
 * Created by mxj on 2017/7/22.
 */
import React from 'react';
import {} from 'antd';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    CheckBox,
    Card,
    notification
} from 'antd';
const FormItem = Form.Item;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class CommonComments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments: ''
        }
    };

    componentDidMount(){
        // console.log(this.props)
        const myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" +this.props.uniquekey,myFetchOptions)
            .then(response => response.json())
            .then(json => {this.setState({comments: json});

            })
    }

    handleSubmit(e){
        e.preventDefault();
        const myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        console.log(formdata.remark)
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" +
            localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark ,myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.componentDidMount();
            });

    };

    addUserCollection(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey,myFetchOptions)
            .then(response => response.json())
            .then(json => {
                //收藏成功以后进行一下全局的提醒
                notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
            })
    };

    render(){
        let {getFieldProps} = this.props.form;
        const {comments} =this.state;
        const commentList = comments.length ?
            comments.map((comment,index) => (
                <Card key={index} title={comment.UserName} extra={<a href='#'>发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '没有加载到任何评论+_+';

        return(
            <div className="comment">
                <Row>
                    {commentList}
                    <Col span={24}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                <Input type="textarea" placeholder="随便写点什么。。。" {...getFieldProps('remark',{initialValue: ''})}/>
                            </FormItem>
                            <Button type="primary" htmlType="submit" >提交评论</Button>
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)} >收藏文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonComments = Form.create({})(CommonComments);