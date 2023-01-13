import {Loader} from '@components/ui'

const Home = () => {
    console.log('home')
    return (
        <div className="flex items-center justify-center mt-12">
            <Loader scale={3}/>
        </div>
    )
}

export default Home
