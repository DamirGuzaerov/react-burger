import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { AppStore, RootState } from '../services/store'
import {setupStore} from "../services/store";



interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
		preloadedState?: PreloadedState<RootState>
		store?: AppStore
}

export function renderWithProviders(
		ui: React.ReactElement,
		{
				preloadedState = {},
				store = setupStore(preloadedState),
				...renderOptions
		}: ExtendedRenderOptions = {}
) {
		function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
				return <Provider store={store}>{children}</Provider>
		}

		return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}