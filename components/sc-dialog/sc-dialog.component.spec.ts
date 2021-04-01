/*
 * Copyright 2018 Quest Software and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDialogComponent } from './sc-dialog.component';

describe('ScDialogComponent', () => {
  let component: ScDialogComponent;
  let fixture: ComponentFixture<ScDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
