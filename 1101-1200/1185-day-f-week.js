/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/day-of-the-week/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-day-of-week
youtube video :- https://youtu.be/LiJ9H7I6AU0
*/

var dayOfTheWeek = function (day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return days[(new Date(year, month - 1, day)).getDay()]
};