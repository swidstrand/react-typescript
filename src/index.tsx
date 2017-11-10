import * as React from "react";
import * as ReactDom from "react-dom";

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return(
            <div><h1>Hello World!</h1></div>
        );
    };
}

ReactDom.render(<Main/>, document.getElementById('main'));