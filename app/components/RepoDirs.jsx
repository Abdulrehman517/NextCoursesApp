import Link from "next/link";

async function fetchRepoContent(name){
    await new Promise((resolve, reject) =>setTimeout(resolve, 3000))
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`,{
        next:{
            revalidate:60
        }
    });
    const content = await response.json();
    return content;
}

const RepoDirs = async ({name}) => {
    const content = await fetchRepoContent(name)
    const isArray = Array.isArray(content);
    console.log('isArray', isArray);
    const dirs = isArray && content.filter(content => content.type === 'dir') || [];

    return (
    <>
    <h3>Directories</h3>
    <ul>
        {dirs.map(dir =>(
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export default RepoDirs