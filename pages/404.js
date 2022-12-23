import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        console.log('use effect ran')
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    },[])

    return ( 
        <div className="not-found">
            <h1>404 | oops! </h1>
            <h3>page not found</h3>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    );
}
 
export default NotFound;