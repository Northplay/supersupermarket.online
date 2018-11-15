import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import Page from '../components/shared/Page';

const Article = styled.div`
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    padding: 50px 10px;
    p, li {
        font-size: 14px;
        line-height: 20px;
    }
    h1, h2, h3 {
        margin: 30px 0 5px 0;
        font-weight: bold;
    }
    a {
        color: ${p => p.theme.colors.yellow};
    }
    ul  {
        list-style-type: disc;
        padding-left: 30px;
        margin-top: 15px;
    }
    h1 { font-size: 42px; }
    h2 { font-size: 26px; }
    h3 { font-size: 18px; }
    p {
        margin: 15px 0;
    }
`;

const Index = () => <Page>
  <Head>
    <title>Privacy Policy</title>
  </Head>
  
  <Article>
    <h1>Super Supermarket Privacy Policy</h1>
    <p>Last revised: November 8, 2018.</p>
    <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. We may change this privacy policy from time to time. Whenever we make changes to this privacy policy, the changes are effective 30 days after we post the revised privacy policy (as indicated by revising the date at the top of our privacy policy). We encourage you to review our privacy policy whenever you access our services to stay informed about our information practices and the ways you can help protect your privacy.</p>
    <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
    <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Super Supermarket unless otherwise defined in this Privacy Policy.</p>

    <h2>Collection of Information</h2>
    <h3>Information You Provide to Us</h3>
    <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.</p>
    <p>The types of information we may collect include your name, your facebook id and other contact or identifying information you choose to provide. If you wish to have your information removed from our service you can contact us by email on <a href="mailto:hey@northplay.co">hey@northplay.co</a>.</p>

    <h3>Third party services</h3>
    <p>We employ the following list of third party services and companies to provide services such as Analytics, Advertising and Content Delivery. These third parties may use cookies, web beacons and other technologies to collect information about your use of the services and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked and conversion information. This information may be used by us and third parties to, among other things, analyze and track data, determine the popularity of certain content and other websites and better understand your online activity. Our privacy policy does not apply to, and we are not responsible for, third party cookies, web beacons or other tracking technologies and we encourage you to check the privacy policies of these third parties to learn more about their privacy practices.</p>

    <ul>
        <li>Unity Ads &amp; Analytics. <a href="https://unity3d.com/legal/privacy-policy">Unity's Privacy Policy</a></li>
        <li>Facebook. <a href="https://www.facebook.com/policy.php">Facebook's Policy</a></li>
        <li>Cloudflare. <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare's Privacy Policy</a></li>
        <li>ip-api.com. <a href="https://signup.ip-api.com/terms">Terms &amp; Privacy Policy for ip-api.com</a></li>
    </ul>

    <h3>Log Data</h3>
    <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>

    <h3>Cookies</h3>
    <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
    <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

    <h3>Service Providers</h3>
    <p>We may employ third-party companies and individuals due to the following reasons:</p>

    <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
    </ul>

    <h3>Security</h3>
    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

    <h3>Links to Other Sites</h3>
    <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

    <h2>Sharing of Information</h2>
    <p>We may share personal information about you as follows:</p>

    <ul>
        <li>If we believe disclosure is reasonably necessary to comply with any applicable law, regulation, legal process or governmental request;</li>
        <li>To enforce applicable user agreements or policies, including our Terms of Service; and to protect us, our users or the public from harm or illegal activities;</li>
        <li>In connection with any merger, sale of Northplay ApS assets, financing or acquisition of all or a portion of our business to another company; and</li>
        <li>If we notify you through our services (or in our privacy policy) that the information you provide will be shared in a particular manner and you provide such information.</li>
    </ul>

    <h2>Contact Us</h2>
    <p>If you have any questions about this privacy policy, please contact us at: <a href="mailto:hey@northplay.co">hey@northplay.co</a>.</p>
    </Article>
</Page>;

export default Index;
