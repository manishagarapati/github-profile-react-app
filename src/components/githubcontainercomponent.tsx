import * as React from 'react';
import CardComponent from './cardcomponent'
import SearchForm from './searchform';

interface IGithubContainerState{
    logins: Array<string>;
}

export default class GithubContainer extends 
React.Component<{}, IGithubContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            logins: []
        };
    }
    addProfile = (loginToadd: string) => {
        this.setState({logins: this.state.logins.concat(loginToadd)})
    }

    render() {
        let cards = this.state.logins.map((login:string)=> 
        {
           return (<CardComponent name={login} key={login}/>)
        })

        return(
            <div>
                <SearchForm addCard={this.addProfile}/>
                <hr/>
                {cards}
            </div>
        )
    }
}
