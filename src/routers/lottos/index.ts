import * as router from 'koa-joi-router';

import get from './get';
import post from './post';

const lotto = router();

lotto.prefix('/lottos');

lotto.route([get, post]);

export default lotto;
