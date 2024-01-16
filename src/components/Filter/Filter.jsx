import css from '../Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
    const filterWithState = useSelector(selectFilter);
    const dispatch = useDispatch();

    const updateStateForFilter = (evt) => {
        evt.preventDefault();
        const filterValue = evt.target.value;
        dispatch(setFilter(filterValue));
    };

        return(
            <>
                <label className={css.label}>
                <span className={css.nameInput}>Find contacts by name</span>
                <input 
                value={filterWithState}
                className={css.input} 
                type="text" 
                name="filter" 
                onChange={updateStateForFilter}
                />
            </label>
            </>
        )
}