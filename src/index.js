'use strict';

import { slider } from './modules/slider'; // Import the slider function using named import
import { tabs } from './modules/tabs'; // Import the tabs function using named import

const swiper = slider(); // Call the slider function and store the returned swiper instance
tabs(swiper); // Pass the swiper instance to the tabs function
