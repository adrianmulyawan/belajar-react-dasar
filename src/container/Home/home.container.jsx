import BlogPostComponent from "../../components/CallAPI/BlogPost/blog-post.component";
import NavbarComponent from "../../components/navbar.component";
// import LifeCycleComponent1 from "../../components/LifeCycle/life-cycle-1.component";
// import ProductComponent from "../../components/Product/product.component";
// import YoutubeComponent from "../../components/YoutubeComponent/youtube.component";

const HomeContainer = () => {
  return (
    <>
      {/* <h1>Youtube Component</h1>
      <hr />
      <YoutubeComponent 
        imageThumb='https://i.ytimg.com/an_webp/URt28V-20sA/mqdefault_6s.webp?du=3000&sqp=CICDlaEG&rs=AOn4CLAaFfIkQ3-amWljiJM_YiC8ng7Z_w'
        time='1:13:21'
        title='Aku Membangun Silo dan Panen Strawberry'
        description='GG Gaming, Bentar Lagi Windah Pensi' 
      />
      <YoutubeComponent 
        imageThumb='https://i.ytimg.com/an_webp/CMJ_We81Et0/mqdefault_6s.webp?du=3000&sqp=CMqKlaEG&rs=AOn4CLCX7Bcr7kn1oCdB3fq5KYoqKszPvw'
        time='1:10:03'
        title='Akhirnya Aku Bertemu Dengan Ada Wong!'
        description='GG Gaming, Bentar Lagi Windah Pensi' 
      />
      <YoutubeComponent 
        imageThumb='https://i.ytimg.com/an_webp/5g75ioXggQw/mqdefault_6s.webp?du=3000&sqp=COiUlaEG&rs=AOn4CLDgismDJMw4P-AhCqlHmq-8pVR_EA'
      /> */}
      {/* <h1>Counting Component</h1>
      <hr />
      <ProductComponent /> */}
      {/* <h1>Lifecycle Component</h1>
      <hr />
      <LifeCycleComponent1 /> */}
      <NavbarComponent />
      <BlogPostComponent />
    </>
  )
};

export default HomeContainer;