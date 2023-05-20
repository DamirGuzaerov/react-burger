import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {RefObject, useEffect, useRef, useState} from "react";
import burgerIngredientsStyles from './burger-ingredients.module.css'
import IngredientsGroup from "./ingredients-group/ingredients-group";
import {useDisclosure} from "../../utils/hooks/useDisclosure";
import {getIngredients} from "../../services/selectors/ingredients";
import {useAppSelector} from "../../utils/hooks/useAppSelector";

const BurgerIngredients = (): JSX.Element => {
    const ingredients = useAppSelector(getIngredients)
    const [currentTab, setCurrentTab] = useState('bun')

    const scrollRef = useRef<HTMLDivElement>(null)

    const firstTitleRef = useRef<HTMLHeadingElement>(null)
    const secondTitleRef = useRef<HTMLHeadingElement>(null)
    const thirdTitleRef = useRef<HTMLHeadingElement>(null)

    const {open} = useDisclosure(false)

    const handleTabClick = (ref:RefObject<HTMLHeadingElement>) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    useEffect(() => {
        let elem = scrollRef.current
        const defineElementPosition = (ref:RefObject<HTMLHeadingElement>) => {
            let elem = ref.current
            if (ref && elem) {
                return elem.getBoundingClientRect()
            }
        }
        const defineActiveTab = () => {
            if (scrollRef && elem) {
                let elemTop = elem.getBoundingClientRect().top
                let firstTitleDistance = Math.abs(elemTop - defineElementPosition(firstTitleRef)!.top)
                let secondTitleDistance = Math.abs(elemTop - defineElementPosition(secondTitleRef)!.top)
                let thirdTitleDistance = Math.abs(elemTop - defineElementPosition(thirdTitleRef)!.top)
                let minDistance = Math.min(firstTitleDistance, secondTitleDistance, thirdTitleDistance)
                return minDistance === thirdTitleDistance ? setCurrentTab('main')
                    : minDistance === secondTitleDistance ? setCurrentTab('sauce')
                        : minDistance === firstTitleDistance ? setCurrentTab('bun')
                            : null
            }
        }
        if (scrollRef && elem) {
            elem.addEventListener('scroll', defineActiveTab)
        }
        return () => {
            elem!.removeEventListener("scroll", defineActiveTab, false);
        };
    }, [])

    return (
        <>
            <section className={burgerIngredientsStyles['burger-ingredients']}>
                <div className={`${burgerIngredientsStyles.tabs} mb-10`}>
                    <Tab value="bun" active={currentTab === 'bun'} onClick={() => {
                        handleTabClick(firstTitleRef);
                        setCurrentTab('bun')
                    }}>
                <span className={'text text_type_main-default'}>
                    Булки
                </span>
                    </Tab>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => {
                        handleTabClick(secondTitleRef);
                        setCurrentTab('sauce')
                    }}>
                <span className={'text text_type_main-default'}>
                    Соусы
                </span>
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={() => {
                        handleTabClick(thirdTitleRef);
                        setCurrentTab('main')
                    }}>
                <span className={'text text_type_main-default'}>
                    Начинки
                </span>
                    </Tab>
                </div>
                <div ref={scrollRef} className={`${burgerIngredientsStyles['ingredients-groups']} custom-scroll`}>
                    <IngredientsGroup
                        ref={firstTitleRef}
                        title='Булки'
                        elementsClick={open}
                        ingredients={ingredients.filter(el => el.type === 'bun')}/>
                    <IngredientsGroup
                        ref={secondTitleRef}
                        title='Соусы'
                        elementsClick={open}
                        ingredients={ingredients.filter(el => el.type === 'sauce')}/>
                    <IngredientsGroup
                        ref={thirdTitleRef}
                        title='Начинка'
                        elementsClick={open}
                        ingredients={ingredients.filter(el => el.type === 'main')}/>
                </div>
            </section>
        </>
    )
}

export default BurgerIngredients