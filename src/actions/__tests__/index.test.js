import {saveComment} from 'actions';
import { SAVE_COMMENT } from "actions/types";

describe('saveComment', () => {
    it('has the correct type', () =>{
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the corect payload', () =>{
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    })
})