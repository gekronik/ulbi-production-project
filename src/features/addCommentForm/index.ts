export { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async';

export { AddCommentFormSchema } from './model/types/addCommentForm';

// фича полностью изолирована, наружу выходит только тип и один компонент
// все селекотры , редюсеры, экшены - они изолированы в рамках одного модуля
// и наружу не при каких услолвиях выходить не должны
