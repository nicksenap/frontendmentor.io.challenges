import { useState } from 'react';

function Modal() {
    const [price, setPrice] = useState(16.00);
    const [pageView, setPageView] = useState(100);
    const [isYearly, setIsYearly] = useState(false);

    function handleChange(e) {
        const discount = isYearly ? 0.75 : 1;
        setPageView(e.target.value);
        setPrice((e.target.value * 0.16) * discount);
    }

    function handleDiscount(e) {
        console.log(e.target.value);
        e.target.value === "on" ? setIsYearly(true) : setIsYearly(false)
    }

    return (
        <div className="Modal-container">
            <div className="Modal">
                <div className="Modal-upper">
                    <div className="Modal__first-row">
                        <div> {pageView}K pageviews  </div>
                        <div className="gap"></div>
                        <div> <h1> ${price.toFixed(2)}</h1> </div>
                        <div>/month </div>
                    </div>
                    <div id="range-input">
                        <input type="range" min="1" max="100" onChange={handleChange} className="scroll" />
                    </div>
                    <div className="billingTypeSwitch">
                        <h5>Monthly Billing</h5>
                        <div className="gap-xs"></div>
                        <label class="switch">
                            <input type="checkbox" onChange={handleDiscount} />
                            <span class="slider round"></span>
                        </label>
                        <div className="gap-xs"></div>
                        <h5> Yearly Billing</h5>
                    </div>
                </div>
                <div className="Modal-lower">
                    <div className="Modal-lower__info">
                        <ul>
                            <li>Unlimited websites</li>
                            <li>100% data ownership</li>
                            <li>Email reports</li>
                        </ul>
                        </div>
                    <div className="Modal-lower-button">
                        <button>Start my trial</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal