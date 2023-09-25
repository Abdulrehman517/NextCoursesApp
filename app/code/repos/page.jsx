import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"


async function fetchRepos() {

const repos = await fetch('https://api.github.com/users/bradtraversy/repos');

await new Promise((resolve, reject) =>setTimeout(resolve,1000))

const res = await repos.json();
return res;
}





const ReposPage = async () => {
    const repos =  await fetchRepos();


  return (
    <div>
        <h2>
        Repos
        </h2>
        <ul className="repo-list">
            { repos.map((repo) =>(
                <li key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}
                    >
                        <h3>{repo.name}</h3>

                        <p>{repo.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar/>{repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch/>{repo.forks_count}
                            </span>
                            <span>
                                <FaEye/>{repo.watchers_count}
                            </span>

                        </div>
                    </Link>

                </li>
            )
            
            )}

        </ul>
       
    </div>
  )
}

export default ReposPage