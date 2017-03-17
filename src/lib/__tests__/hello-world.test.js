import test from 'ava'
import {mount} from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import {HelloWorld} from '../hello-world'

test('Check DOM for <HelloWorld/> content.', t => {
  const wrapper = mount(<HelloWorld name="Jon Doe" />)

  console.log(wrapper.name())
//  t.true(timeoutSpy.notCalled, 'onTimeout called')
})
