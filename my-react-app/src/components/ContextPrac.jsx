import React from 'react'
import Inner_context from './Inner_context'
import Heading_context from './Heading_context'

export default function ContextPrac() {
    return (
        <div>
            <h1>Context Practice</h1>
            <hr />
            <Heading_context size={1}>
                <Inner_context>
                    context text 1
                </Inner_context>
                <Heading_context size={2}>
                    <Inner_context>
                        context text 2
                    </Inner_context>
                    <Heading_context size={3}>
                        <Inner_context>
                            context text 3
                        </Inner_context>
                        <Heading_context size={4}>
                            <Inner_context>
                                context text 4
                            </Inner_context>
                        </Heading_context>
                    </Heading_context>
                </Heading_context>
            </Heading_context>
        </div>
    )
}
