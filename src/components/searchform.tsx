import * as React from 'react';

interface ISearchFormState{
    logins: string;
}

interface ISearchFormProps{
    addCard: (name: string) => void;
}

export default class SearchForm extends 
React.Component<ISearchFormProps, ISearchFormState> {
    constructor(props: ISearchFormProps) {
        super(props);
        this.state = {
            logins: ''
        };
    }

    onFieldChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({logins: event.target.value})
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
            event.preventDefault();
            this.props.addCard(this.state.logins);
            this.setState({logins:''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input placeholder="github login" value={this.state.logins} onChange={this.onFieldChange}/>
            <input type="submit" value="Submit" />
            </form>
        )
    }
}
