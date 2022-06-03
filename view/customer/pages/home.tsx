import { useSelector } from "react-redux"
import {PageWrapper, Header, HomePageMap, Carousel, GoToCartBtn } from '../../../components'
import { getUser } from "../../../redux"

type currentUser={
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  img: string;
  role: string;
}

const Home = () => {
  let user = useSelector(getUser)
  
  return (
    <>
      <PageWrapper>
        <Header user={user} isPendingOrder={true}/>
        <HomePageMap/>
        <Carousel/>
        <GoToCartBtn/>
      </PageWrapper>
    </>
  )
}
export default Home;