function navbar() {
    return `    <div id="hotel-header">

            <div id="hotel-header-left">
            <div class="logo">
            <h1>T A T</h1>
            <p>Travel and Tourism</p>
        </div>
         <div id="search">
                    <input type="text" id="city" placeholder="Search.....">
                    <button id="city-search"> Search</button>
                </div>
            </div>

            <div id="hotel-header-right">
                <div>
                    <img src="https://th.bing.com/th/id/OIP.xJHU5ymDz9RTGwwmZOCYGAHaHa?w=191&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="">
                    <a href="#">Review</a>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.IJ3y7ec3b_RBwkDT3qmbswHaG4?w=208&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="">
                    <a href="#">Trips</a>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.L15u7GCz05yErR1F6PIMUgHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="">
                    <a href="#">Alerts</a>
                </div>
            
            </div>
        </div>

        <hr style="border-width: 1px; margin-top: 10px;">
        <div id="nav">
            <a href="./index.html" class="hvr-underline-from-center">Home</a>
            <a href="./searchHotel.html" class="hvr-underline-from-center">Hotels</a>
            <a href="./places.html" class="hvr-underline-from-center">Places</a>
            <a href="#" class="hvr-underline-from-center">Restaurants</a>
            <a href="#" class="hvr-underline-from-center"> Flights</a>
            <a href="#" class="hvr-underline-from-center">Holiday Homes</a>
            <a href="#" class="hvr-underline-from-center">Travel Stories</a>
            <a href="#" class="hvr-underline-from-center">Help</a>
            <a href="#">...</a>
        </div>`;
}
function sectionBody() {
    return '';
}

function footer() {
    return `     <div class="footer_1">
            <div>
                <p>About TAT</p>
                <a>About Us</a>
                <a>Press</a>
                <a>Resources and Policies<a>
                        <a> Careers</a>
                        <a>Content Integrity</a>
            </div>
            <div>
                <p>Explore</p>
                <a>Write a Review</a>
                <a>Add a Place</a>
                <a> Join</a>
                <a>Travellers' Choice</a>
                <a>GreenLeaders</a>
                <a>Help Centre</a>

            </div>
            <div>
                <p>Do Business With Us</p>
                <a>Owners<a>
                        <a>Business Advantage</a>
                        <a>Advertise with Us</a>
                        <a>Sponsored Placements</a>
                        <a>Become an Affiliate</a>
            </div>
            <div>

                <p>TAT Sites</p>
                <a>Book the best restaurants with TheFork</a>
                <a>Book tours and attraction tickets on Viator</a>
                <a>Read cruise reviews on Cruise Critic</a>
                <a>Search for holiday rentals on Holiday Lettings</a>


            </div>

        </div>
        <div class="footer_2">
            <div class="footer_21">
            <div class="logo">
            <h1>T A T</h1>
            <p>Travel and Tourism</p>
        </div> <p>© 2023 TAT LLC All rights reserved.</p>
            </div>
            <div>

                <div class="footer_22">
                    <a>Terms of Use</a>
                    <a href="">Privacy and Cookies Statement</a>
                    <a href="">Cookie Consent</a>
                    <a href="">Site Map</a>
                    <a href="">How the Site Works</a>
                </div>
            </div>
            <div>
                <img src="" alt="">
            </div>

        </div>
`;
   
}
export { navbar, sectionBody, footer }