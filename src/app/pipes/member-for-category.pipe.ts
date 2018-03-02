import { BoardMember } from '@campcadet/model/board-member';
import { SimpleItem } from '@campcadet/model/simple-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberForCategory'
})
export class MemberForCategoryPipe implements PipeTransform {

  transform(members: BoardMember[], category: SimpleItem): BoardMember[] {
    return members.filter(member => member.boardMemberCategory.id === category.id)
      .sort((a, b) => {
        if (a.sortPriority > b.sortPriority) { return 1; }
        if (a.sortPriority < b.sortPriority) { return -1; }
        return 0;
      });
  }
}
