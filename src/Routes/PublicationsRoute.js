import {Router} from 'express';
import ControllerPublication from '../Controllers/Publications.js';

const router = Router();

router.get('/', ControllerPublication.getAll);

router.post('/', ControllerPublication.create);

router.put('/:id', ControllerPublication.update);

router.delete('/:id', ControllerPublication.delete);

export default router;