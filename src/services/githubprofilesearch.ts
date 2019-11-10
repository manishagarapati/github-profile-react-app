import {Observable,defer,from} from 'rxjs';
import {GithubProfile} from '../model/githubprofile';

class GithubProfileService {


public apiCall(id: string): Observable<GithubProfile> {
return defer(() => 
{
return from<Promise<GithubProfile>>(
fetch(`https://api.github.com/users/${id}`)
.then(r => r.json()).then(this.mapToGithubProfile)
);
}); 
}

private mapToGithubProfile(github: GithubProfile): GithubProfile{
return {
login: github.login,
id: github.id,
avatar_url: github.avatar_url,
bio: github.bio,
public_repos: github.public_repos,
followers: github.followers
}

}

}

export default new GithubProfileService();