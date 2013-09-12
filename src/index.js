/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

var Banner = require('./elements/Banner/Banner.js');
var React = require('React');
var Rx = require('rx');
var RxMixin = require('./rxutils/RxMixin');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var VectorWidget = require('./elements/VectorWidget/VectorWidget.js');

var index = React.createClass({

  mixins: [RxMixin],

  getSubjects: function() {
    return {
      isPressed: new Rx.Subject()
    };
  },

  render: function() {
    return (
      <SiteBoilerPlate>
        <Banner
          isPressedInput={this.subjects.isPressed}
          bannerMessage="Welcome to React"
        />
        <VectorWidget isPressedOutput={this.subjects.isPressed} />
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
