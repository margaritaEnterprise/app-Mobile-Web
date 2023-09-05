
const Paginator = (total) => {
    console.log(total);
    return  `
    <div class="paginator">
        <i class="material-icons paginator__arrow">arrow_back_ios</i>
        <p>  1 - ... - 7 - 8 - 9 - ... - 25  </p> 
        <i class="material-icons paginator__arrow">arrow_forward_ios</i>
    </div>
    `
}

export default Paginator; 