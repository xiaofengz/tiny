import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Write from 'CONTAINERS/Write';
import Markdown from 'CONTAINERS/EditorMarkdown'
class Editor extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="body" >
                <Row>
                    <Col span={6}>新建文章</Col>
                    <Col span={18}>
                    <input type="text" placeholder="请输入文章标题..."/>
                    <Markdown />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Editor;