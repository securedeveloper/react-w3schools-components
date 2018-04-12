import * as React from 'react';

import './HelloWorld.scss';

export interface Props {
    /**
     * Message to append to component
     */
    message?: string;
}

export interface State { }

export default class HelloWorld extends React.Component<Props, State> {

    public static defaultProps: Props = {
        message: 'World'
    };

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <div className="hello-world">
                Hello {this.props.message}
            </div>
        );
    }
}
