import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import swipe from '../components/swipe'
import swipeList from '../components/swipeList'
import footer from '../components/footer'
import bigEvent from '../components/bigEvent'
import aboutContent from '../components/aboutContent'
import watchVideo from '../components/watchVideo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        components: {
            header: header,
			swipe: swipe,
            swipeList: swipeList,
            footer: footer
        },
		beforeEnter (to, from, next) {
			[].forEach.call(document.getElementsByTagName('li'),function(item) {item.className = ''});
			next();
		}
    },{
        path: '/about',
        components: {
            header: header,
            footer: footer,
			aboutContent: aboutContent
        }
    },{
        path: '/bigevent',
        components: {
            header: header,
			bigEvent: bigEvent,
            footer: footer
        }
    },{
        path: '/video',
        components: {
            header: header,
            footer: footer,
            watchVideo: watchVideo
        }
    }],
    scrollBehavior (to, from, savedPosition) {
        console.log(to,from,savedPosition);
        return { x: 0, y: 0 };
    },
    mode: 'history'
})
