import * as React from 'react';
import { GithubProfile } from '../model/githubprofile';
import GithubProfileService from '../services/githubprofilesearch';

interface ICardState{
    githubprofile: GithubProfile;
}
interface ICardProps {
    name: string;
}

export default class CardComponent extends 
React.Component<ICardProps,ICardState> {
    constructor(props: ICardProps) {
        super(props);
        this.state = {githubprofile:{
            login: '',
            id: 0,
            avatar_url: '',
            bio: '',
            public_repos: 0,
            followers: 0
        }
    }
}
        componentDidMount() {
            GithubProfileService.apiCall(this.props.name)
            .subscribe((githubprofile : GithubProfile) => 
            this.setState({githubprofile: githubprofile})
            )
        }

        render(){
            return(
                <div>
                <img src={this.state.githubprofile.avatar_url} width="80" />
                <h3>{this.state.githubprofile.login}</h3>
                <h2>{this.state.githubprofile.bio}</h2>
                <h2>{this.state.githubprofile.followers}</h2>
                <h2>{this.state.githubprofile.public_repos}</h2>
                <hr/>
                </div>
            )
        }
    }
