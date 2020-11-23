// pages/profile.js
import Hr from '../components/separator';
import SocialmediaBar from '../components/socialmediaBar';
import Layout from "../components/Layout";

const ProfileView = props =>
  <Layout>
    <div class="container">
      <div class="row">
        <SocialmediaBar />
        <h2 style={{ marginLeft: '11%', marginTop: 70, fontWeight: "bold" }}>About Us</h2>
        <Hr />
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  </Layout>;

export default ProfileView;