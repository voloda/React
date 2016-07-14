/// <reference path="../../typings/modules/react/index.d.ts" />
import React = require('react');

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface IHelloWorldProps extends React.Props<any> {
    name: string;
}

class HelloMessage extends React.Component<IHelloWorldProps, {}> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

export = HelloMessage;