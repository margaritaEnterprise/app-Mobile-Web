import Footer from '../components/footer.js';

const renderFooter = () => {
    let foot = document.getElementById('foot');
    foot.innerHTML = Footer();
}

export default renderFooter;